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
		"content": `<style>.acpdoe2mm {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 14v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.drjad9bfe {
  d: path("M14 14v4");
}

.evsu0jbbm {
  d: path("M10 14v4");
}

.gxecv1bcc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 3v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ktxjg3b2q {
  d: path("M6 14v4");
}

.ni3lnewqa {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 14h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oqj-o0b2r {
  d: path("M5 14h14");
}

.oxd1nqbfa {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 14v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pdai76vlu {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M18 14v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qv6cnabrq {
  d: path("M12 3v11");
}

.rmhm9l1ql {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M10 14v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zpusjcvvn {
  d: path("M18 14v4");
}
</style><g class="nrj6p8qat"><path class="gxecv1bcc"/><path class="ni3lnewqa"/><path class="acpdoe2mm"/><path class="rmhm9l1ql"/><path class="oxd1nqbfa"/><path class="pdai76vlu"/><path class="qv6cnabrq"/><path class="oqj-o0b2r"/><path class="ktxjg3b2q"/><path class="evsu0jbbm"/><path class="drjad9bfe"/><path class="zpusjcvvn"/></g>`,
		"fallback": "iconmind:rake-duotone-regular",
	});
}

export default Component;
