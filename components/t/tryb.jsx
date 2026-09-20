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
		"content": `<style>.q8a90rb2r {
  fill: var(--svg-color--20316b, #20316b);
  d: path("M17.247 10.699c.007-.268 0-.976 0-.976L10.75 8v2l4.5 1.17c-.372 4.627-2.539 7.285-6.5 7.83V3.565L6.75 3v18l1.069-.054c3.947-.199 8.584-2.02 9.349-9.224c.035-.33.07-.67.079-1.023M15.24 7.29l.51-1.79l-5-1.5v2z");
}
</style><path class="q8a90rb2r"/>`,
		"fallback": "token-branded:tryb",
	});
}

export default Component;
