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

.iwn42qwfd {
  d: path("M17.5 3h-9a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 18V5h9v16z");
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.kvn14gsjy {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
}

.m1qkxfbep {
  d: path("M10.5 6.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVG9WzZBcgr"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="iwn42qwfd"/><path class="m1qkxfbep"/></g></mask></defs><circle mask="url(#SVG9WzZBcgr)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:smartphone-cutout-circle-filled",
	});
}

export default Component;
