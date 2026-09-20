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
		"content": `<style>.j5baogbem {
  d: path("M8 11h8");
}

.j6o0shbiv {
  d: path("M7 18h5");
}

.ni20md-jo {
  d: path("M13.5 3H17a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V6l3 -3h3.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uesvxd39h {
  d: path("M15 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.v-tzykfyw {
  d: path("M14 8v6");
}

.ywkrw0bbn {
  d: path("M10 8v6");
}
</style><g class="nrj6p8qat"><path class="ni20md-jo"/><path class="j6o0shbiv"/><path class="uesvxd39h"/><path class="ywkrw0bbn"/><path class="v-tzykfyw"/><path class="j5baogbem"/></g>`,
		"fallback": "iconmind:mcp-schema-version-outline-regular",
	});
}

export default Component;
