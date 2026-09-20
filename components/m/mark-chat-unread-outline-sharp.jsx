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
		"content": `<style>.z4u17obkt {
  fill: currentColor;
  d: path("M3 20.077V3h11.6q-.061.25-.071.49t-.006.51H4v13.644L5.65 16H20V8.342q.287-.067.527-.155q.24-.087.473-.225V17H6.077zM4 4.616v12.769V4zm13.23 1.117q-.73-.728-.73-1.77t.729-1.77t1.769-.731t1.771.728t.731 1.77t-.728 1.77t-1.77.732t-1.771-.729");
}
</style><path class="z4u17obkt"/>`,
		"fallback": "material-symbols-light:mark-chat-unread-outline-sharp",
	});
}

export default Component;
