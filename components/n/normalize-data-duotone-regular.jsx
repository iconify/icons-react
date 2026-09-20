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
		"content": `<style>.dd2oi04rr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 19h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.imbfzub2u {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 8v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.k7cz9qivc {
  d: path("M18 11v5");
}

.mkh6f026t {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 5h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o759xmblc {
  d: path("M6 8v8");
}

.qzd33790h {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.wew0vnk_n {
  d: path("M12 5v14");
}

.zj9ot1bfe {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M18 11v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="mkh6f026t"/><path class="dd2oi04rr"/><path class="imbfzub2u"/><path class="qzd33790h"/><path class="zj9ot1bfe"/><path class="k6nj2fbya"/><path class="rkhcgsbdl"/><path class="o759xmblc"/><path class="wew0vnk_n"/><path class="k7cz9qivc"/></g>`,
		"fallback": "iconmind:normalize-data-duotone-regular",
	});
}

export default Component;
