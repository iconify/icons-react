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
		"content": `<style>.sonaldb2u {
  fill: currentColor;
  d: path("M8 21V7.994h13v8.583L16.577 21zm12-5h-4v4zM5.012 17.806L2.752 5.01l12.794-2.259l.504 2.864H5.617v12.082z");
}
</style><path class="sonaldb2u"/>`,
		"fallback": "material-symbols-light:note-stack-sharp",
	});
}

export default Component;
