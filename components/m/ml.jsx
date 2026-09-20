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
		"content": `<style>.gjjzc_bio {
  fill: var(--svg-color--11967f, #11967f);
  d: path("m3 3l3.6 1.512v15.066L3 21zm4.8 7.2l3.6 1.512v6.066L7.8 19.2zM21 21l-3.6-1.512V4.422L21 3zm-4.8-7.2l-3.6-1.512V6.222L16.2 4.8z");
}
</style><path class="gjjzc_bio"/>`,
		"fallback": "token-branded:ml",
	});
}

export default Component;
