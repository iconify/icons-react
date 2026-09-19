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
		"content": `<style>.ixa33fb1u {
  cx: 12px;
  cy: 8px;
  r: 2px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-3, 0.3);
}

.l-n9s6bcw {
  fill: currentColor;
  d: path("M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2z");
}

.qqbhcbbda {
  fill: currentColor;
  d: path("M12 15c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><circle class="ixa33fb1u"/><path class="qqbhcbbda"/><path class="l-n9s6bcw"/>`,
		"fallback": "ic:twotone-perm-identity",
	});
}

export default Component;
