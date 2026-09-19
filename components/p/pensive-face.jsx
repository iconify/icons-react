import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r7p4lcxdj {
  fill: var(--svg-color--664e27, #664e27);
  d: path("M35.9 32.2c4.2 8 12.7 8 16.9 0c.2-.4-.3-.6-1-1c-4.2 3.3-11.1 3-14.9 0c-.6.4-1.2.6-1 1m-24.7 0c4.2 8 12.7 8 16.9 0c.2-.4-.3-.6-1-1c-4.2 3.3-11.1 3-14.9 0c-.7.4-1.2.6-1 1M38 50H26c-1.3 0-1.3-4 0-4h12c1.3 0 1.3 4 0 4");
}

.rhvdvboaq {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--ffdd67, #ffdd67);
}

.xpv-_ebro {
  fill: var(--svg-color--917524, #917524);
  d: path("M53.2 25.7c-3.2-2.7-7.5-3.9-11.7-3.1c-.6.1-1.1-2-.4-2.2c4.8-.9 9.8.5 13.5 3.6c.6.5-1 2.1-1.4 1.7m-30.7-3.3c-4.2-.7-8.5.4-11.7 3.1c-.4.4-2-1.2-1.4-1.7c3.7-3.2 8.7-4.5 13.5-3.6c.7.2.2 2.4-.4 2.2");
}
</style><circle class="rhvdvboaq"/><path class="xpv-_ebro"/><path class="r7p4lcxdj"/>`,
		"fallback": "emojione:pensive-face",
	});
}

export default Component;
