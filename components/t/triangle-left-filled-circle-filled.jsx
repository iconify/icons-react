import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bd9gczbnq {
  cx: 13px;
  cy: 13px;
  r: 13px;
  fill: currentColor;
}

.ffkbv6bma {
  d: path("M17.5 6.365a1 1 0 0 1 1.5.866V18.77a1 1 0 0 1-1.5.866l-9.999-5.769a1 1 0 0 1 0-1.732zM12.003 13L16 15.306v-4.612z");
}

.ft5dv1b6b {
  fill: none;
}

.ig8-m3hzx {
  d: path("M7.501 13.866a1 1 0 0 1 0-1.732l10-5.769A1 1 0 0 1 19 7.231V18.77a1 1 0 0 1-1.5.866z");
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.kvn14gsjy {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGsqcJhVTy"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="ig8-m3hzx"/><path class="ffkbv6bma"/></g></mask></defs><circle mask="url(#SVGsqcJhVTy)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:triangle-left-filled-circle-filled",
	});
}

export default Component;
