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
		"content": `<style>.whixvibhe {
  fill: var(--svg-color--836ef9, #836ef9);
  d: path("M12 3c-2.599 0-9 6.4-9 9s6.401 9 9 9s9-6.401 9-9s-6.401-9-9-9m-1.402 14.146c-1.097-.298-4.043-5.453-3.744-6.549s5.453-4.042 6.549-3.743c1.095.298 4.042 5.453 3.743 6.549c-.298 1.095-5.453 4.042-6.549 3.743");
}
</style><path class="whixvibhe"/>`,
		"fallback": "token-branded:monad",
	});
}

export default Component;
