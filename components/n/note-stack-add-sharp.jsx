import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j_scgh01f {
  fill: currentColor;
  d: path("M8 21V7.994h13v8.583L16.577 21zm-2.988-3.194L2.752 5.01l12.794-2.259l.504 2.864H5.617v12.082zM14 18h1v-3h3v-1h-3v-3h-1v3h-3v1h3z");
}
</style><path class="j_scgh01f"/>`,
		"fallback": "material-symbols-light:note-stack-add-sharp",
	});
}

export default Component;
