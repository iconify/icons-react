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
		"content": `<style>.m_p24pbfh {
  fill: currentColor;
  d: path("m12 10.113l4.152-6.643a.998.998 0 0 1 1.731.061a1 1 0 0 1-.035.999L13 12.287V20a1 1 0 0 1-2 0v-7.713L6.152 4.53a1 1 0 0 1 1.696-1.06Z");
}
</style><path class="m_p24pbfh"/>`,
		"fallback": "coolicons:letter-y-bulk",
	});
}

export default Component;
