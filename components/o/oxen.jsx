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
		"content": `<style>.gom_4pbjc {
  fill: var(--svg-color--12c6ba, #12c6ba);
  fill-rule: evenodd;
  d: path("M12 12L3 4.2h18zm0 0l-9 7.8h18z");
}
</style><path clip-rule="evenodd" class="gom_4pbjc"/>`,
		"fallback": "token-branded:oxen",
	});
}

export default Component;
