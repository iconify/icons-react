import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ea3f2lbhw {
  fill: var(--svg-color--ff7300, #ff7300);
  d: path("M0 9.17h36v4.5H0z");
}

.ib_3a4dsl {
  fill: var(--svg-color--880082, #880082);
  d: path("M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-.5H0z");
}

.onudq62vo {
  fill: var(--svg-color--fad220, #fad220);
  d: path("M0 13.5h36V18H0z");
}

.op66aob4d {
  fill: var(--svg-color--ff000e, #ff000e);
  d: path("M32 5H4a4 4 0 0 0-4 4v.33h36V9a4 4 0 0 0-4-4");
}

.ycf8h2u5h {
  fill: var(--svg-color--3558a0, #3558a0);
  d: path("M0 22.07h36v4.6H0z");
}

.yove13b9w {
  fill: var(--svg-color--138f3e, #138f3e);
  d: path("M0 17.83h36v4.5H0z");
}
</style><path class="ib_3a4dsl"/><path class="ycf8h2u5h"/><path class="yove13b9w"/><path class="onudq62vo"/><path class="ea3f2lbhw"/><path class="op66aob4d"/>`,
		"fallback": "twemoji:rainbow-flag",
	});
}

export default Component;
