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
		"content": `<style>.en1fcactg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 3v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ffs26fbkv {
  d: path("M12 17v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i2-ny_bzf {
  d: path("M12 3v4");
}

.lwdt7zb5f {
  d: path("M4 2v20");
}

.pk1ekjvnl {
  d: path("M20 2v20");
}

.qzhqkqbxa {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M20 2v20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sx1m0u7ew {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 17v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tjt9ibawx {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 10.5v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u2wjvdbsd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 2v20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vw_dl18nv {
  d: path("M12 10.5v3");
}
</style><g class="hntgybcog"><path class="u2wjvdbsd"/><path class="qzhqkqbxa"/><path class="en1fcactg"/><path class="tjt9ibawx"/><path class="sx1m0u7ew"/><path class="lwdt7zb5f"/><path class="pk1ekjvnl"/><path class="i2-ny_bzf"/><path class="vw_dl18nv"/><path class="ffs26fbkv"/></g>`,
		"fallback": "iconmind:motorway-duotone-thin",
	});
}

export default Component;
