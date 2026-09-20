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
		"content": `<style>.sut3pw0gz {
  fill: currentColor;
  d: path("M7 22V6.975h15V17l-5 5zm-2.7-2.925L1.675 4.3L16.45 1.675L17.05 5H5v13.95zm9.2-.575h2v-3h3v-2h-3v-3h-2v3h-3v2h3z");
}
</style><path class="sut3pw0gz"/>`,
		"fallback": "material-symbols:note-stack-add-sharp",
	});
}

export default Component;
