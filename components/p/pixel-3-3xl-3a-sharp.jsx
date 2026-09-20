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
		"content": `<style>.qnjpmkbza {
  fill: currentColor;
  d: path("M9 6q.425 0 .713-.287Q10 5.425 10 5t-.287-.713Q9.425 4 9 4t-.712.287Q8 4.575 8 5t.288.713Q8.575 6 9 6ZM5 23V1h14v22Z");
}
</style><path class="qnjpmkbza"/>`,
		"fallback": "material-symbols:pixel-3-3xl-3a-sharp",
	});
}

export default Component;
