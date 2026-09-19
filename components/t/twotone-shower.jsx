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
		"content": `<style>.cdhtlqbkg {
  cx: 8px;
  cy: 17px;
  r: 1px;
  fill: currentColor;
}

.da7chunho {
  cx: 16px;
  cy: 20px;
  r: 1px;
  fill: currentColor;
}

.mvbrhwg_a {
  cx: 8px;
  cy: 20px;
  r: 1px;
  fill: currentColor;
}

.oclompb7u {
  cx: 12px;
  cy: 17px;
  r: 1px;
  fill: currentColor;
}

.pav6vtoat {
  cx: 16px;
  cy: 17px;
  r: 1px;
  fill: currentColor;
}

.ps_27cbew {
  fill: currentColor;
  d: path("M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92M7 12c0-2.76 2.24-5 5-5s5 2.24 5 5z");
}

.ry6tsxfog {
  cx: 12px;
  cy: 20px;
  r: 1px;
  fill: currentColor;
}

.sknl25ktd {
  fill: currentColor;
  d: path("M12 7c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="sknl25ktd"/><circle class="mvbrhwg_a"/><circle class="pav6vtoat"/><path class="ps_27cbew"/><circle class="da7chunho"/><circle class="oclompb7u"/><circle class="cdhtlqbkg"/><circle class="ry6tsxfog"/>`,
		"fallback": "ic:twotone-shower",
	});
}

export default Component;
