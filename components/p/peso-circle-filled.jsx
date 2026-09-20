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

.ft5dv1b6b {
  fill: none;
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.kvn14gsjy {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
}

.ro547ac9i {
  d: path("M9 4.5a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1");
}

.scerjx-uy {
  d: path("M14 6.5H9v-2h5a5 5 0 0 1 5 5v1a5 5 0 0 1-5 5H9v-2h5a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3");
}

.v08o1nznu {
  d: path("M5 8.436a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGe2acJaiH"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="scerjx-uy"/><path class="ro547ac9i"/><path class="v08o1nznu"/></g></mask></defs><circle mask="url(#SVGe2acJaiH)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:peso-circle-filled",
	});
}

export default Component;
