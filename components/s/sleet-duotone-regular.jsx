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
		"content": `<style>.c-pcdbceg {
  d: path("M4 14a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 5a5.5 5.5 0 0 1 4.5 9Z");
}

.esolkqbpc {
  fill: currentColor;
  d: path("M4 14a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 5a5.5 5.5 0 0 1 4.5 9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.eyqfcg4xc {
  d: path("M16 15.5v6m-3 0 6 -6");
}

.febfntvye {
  d: path("m8 17.5 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}

.lo46m0sso {
  fill: currentColor;
  d: path("m8 17.5 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="esolkqbpc"/><path class="lo46m0sso"/><path class="c-pcdbceg"/><path class="febfntvye"/><path class="eyqfcg4xc"/></g>`,
		"fallback": "iconmind:sleet-duotone-regular",
	});
}

export default Component;
