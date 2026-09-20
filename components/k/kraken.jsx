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
		"content": `<style>.veknp551g {
  fill: var(--svg-color--7133f5, #7133f5);
  d: path("M11.998 4.5C7.028 4.5 3 8.774 3 14.047v4.09c0 .753.575 1.363 1.285 1.363s1.288-.61 1.288-1.362v-4.091c0-.755.573-1.365 1.285-1.365c.71 0 1.284.61 1.284 1.365v4.09c0 .753.575 1.363 1.285 1.363c.712 0 1.286-.61 1.286-1.362v-4.091c0-.755.575-1.365 1.285-1.365c.712 0 1.289.61 1.289 1.365v4.09c0 .753.574 1.363 1.284 1.363s1.285-.61 1.285-1.362v-4.091c0-.755.574-1.365 1.288-1.365c.71 0 1.285.61 1.285 1.365v4.09c0 .753.575 1.363 1.287 1.363c.71 0 1.284-.61 1.284-1.362v-4.091C21 8.774 16.97 4.5 11.998 4.5");
}
</style><path class="veknp551g"/>`,
		"fallback": "token-branded:kraken",
	});
}

export default Component;
