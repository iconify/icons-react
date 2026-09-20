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
		"content": `<style>.c0_odobsd {
  d: path("M3 17v3h3");
}

.gvfa1mb1f {
  d: path("M11 20h3v-3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.okzo6wb9p {
  d: path("m17 10 2 2 -2 2");
}

.qhy91zm_e {
  d: path("M6 12h5");
}

.w-0ktubui {
  d: path("M3 7V4h3");
}

.yxcg20bta {
  d: path("M11 4h3v3");
}
</style><g class="nrj6p8qat"><path class="w-0ktubui"/><path class="yxcg20bta"/><path class="c0_odobsd"/><path class="gvfa1mb1f"/><path class="qhy91zm_e"/><path class="okzo6wb9p"/></g>`,
		"fallback": "iconmind:ocr-ingest-outline-regular",
	});
}

export default Component;
