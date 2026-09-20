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
		"content": `<style>.gop02zbrx {
  d: path("M8 4h8");
}

.ilcfk6b1a {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 20h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o3j__tb-v {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 4h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qw7b_6b1t {
  d: path("M8 20h8");
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.uw099db1h {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="o3j__tb-v"/><path class="uw099db1h"/><path class="ilcfk6b1a"/><path class="gop02zbrx"/><path class="r7xk8o29f"/><path class="qw7b_6b1t"/></g>`,
		"fallback": "iconmind:text-cursor-duotone-regular",
	});
}

export default Component;
