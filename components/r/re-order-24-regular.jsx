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
		"content": `<style>.kkhgqchzu {
  fill: currentColor;
  d: path("M2.75 13.25h18.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.493zh18.5zm0-4h18.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.493zh18.5z");
}
</style><path class="kkhgqchzu"/>`,
		"fallback": "fluent:re-order-24-regular",
	});
}

export default Component;
