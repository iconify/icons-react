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
		"content": `<style>.cy0m90bbz {
  d: path("M8 18H5");
}

.ggxa63i9q {
  d: path("M16 18h3");
}

.mdw7p8b6l {
  d: path("m8 18 4 -4 4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.owfn5sxxm {
  d: path("M12 8v6");
}

.tk9hd5usx {
  d: path("m9 13 3 -3 3 3");
}

.w08657bnd {
  d: path("M9 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="nrj6p8qat"><path class="w08657bnd"/><path class="owfn5sxxm"/><path class="tk9hd5usx"/><path class="mdw7p8b6l"/><path class="cy0m90bbz"/><path class="ggxa63i9q"/></g>`,
		"fallback": "iconmind:walking-outline-regular",
	});
}

export default Component;
