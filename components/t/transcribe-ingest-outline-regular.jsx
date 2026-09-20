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
		"content": `<style>.f6k_-qbtg {
  d: path("M16 13h3");
}

.hcqml3bhu {
  d: path("M8 6v12");
}

.l517yxbln {
  d: path("M12 9v6");
}

.lbz2yq5no {
  d: path("M4 9v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uub08b4lk {
  d: path("M16 9h5");
}

.xbl1wuhge {
  d: path("M16 17h5");
}
</style><g class="nrj6p8qat"><path class="lbz2yq5no"/><path class="hcqml3bhu"/><path class="l517yxbln"/><path class="uub08b4lk"/><path class="f6k_-qbtg"/><path class="xbl1wuhge"/></g>`,
		"fallback": "iconmind:transcribe-ingest-outline-regular",
	});
}

export default Component;
