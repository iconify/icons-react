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
		"content": `<style>.hrbcgxb0f {
  d: path("M3 11V8.5h3.5V11");
}

.i55cujbki {
  d: path("M2 14h8");
}

.lue0cj-so {
  d: path("M14 18v-7h8v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q45jzkbtp {
  d: path("M15 11V8.5h3.5V11");
}

.shmft-b2f {
  d: path("M14 14h8");
}

.yt443xqvj {
  d: path("M2 18v-7h8v7");
}
</style><g class="nrj6p8qat"><path class="yt443xqvj"/><path class="i55cujbki"/><path class="hrbcgxb0f"/><path class="lue0cj-so"/><path class="shmft-b2f"/><path class="q45jzkbtp"/></g>`,
		"fallback": "iconmind:twin-beds-outline-regular",
	});
}

export default Component;
