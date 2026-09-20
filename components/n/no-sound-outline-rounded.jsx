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
		"content": `<style>.emghn4b-j {
  fill: currentColor;
  d: path("m18 13.4l-1.9 1.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l1.9-1.9l-1.9-1.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l1.9 1.9l1.9-1.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L19.4 12l1.9 1.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275zM7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h3l3.3-3.3q.475-.475 1.088-.213t.612.938v11.15q0 .675-.612.938T10.3 18.3zm3-6.15L7.85 11H5v2h2.85L10 15.15zM7.5 12");
}
</style><path class="emghn4b-j"/>`,
		"fallback": "material-symbols:no-sound-outline-rounded",
	});
}

export default Component;
