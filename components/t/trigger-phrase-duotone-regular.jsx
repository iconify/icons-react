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
		"content": `<style>.i9hgspbqe {
  d: path("M6 4v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qxi9d8jum {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9.5 4v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w2flskbzg {
  d: path("m15 10 -4 4h3l-4 4");
}

.wb0w7r_ye {
  d: path("M9.5 4v3");
}

.wq0qrpytx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m15 10 -4 4h3l-4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zahy2jkjq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 4v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="zahy2jkjq"/><path class="qxi9d8jum"/><path class="wq0qrpytx"/><path class="i9hgspbqe"/><path class="wb0w7r_ye"/><path class="w2flskbzg"/></g>`,
		"fallback": "iconmind:trigger-phrase-duotone-regular",
	});
}

export default Component;
