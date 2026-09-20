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
		"content": `<style>.q_7cqmb8i {
  fill: currentColor;
  d: path("m10 17.077l5.577-3.577L10 9.923zM4.616 20q-.691 0-1.153-.462T3 18.384V7h6V5.615q0-.69.463-1.153T10.616 4h2.769q.69 0 1.153.462T15 5.615V7h6v11.385q0 .69-.462 1.153T19.385 20zM10 7h4V5.615q0-.23-.192-.423T13.385 5h-2.77q-.23 0-.423.192T10 5.615z");
}
</style><path class="q_7cqmb8i"/>`,
		"fallback": "material-symbols-light:shop",
	});
}

export default Component;
