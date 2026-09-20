import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g_gp7lgqe {
  stop-color: var(--svg-color--2684ff, #2684ff);
}

.ko9nuccxa {
  d: path("M122.951 122.489H0c0 30.653 24.85 55.502 55.502 55.502h22.72v21.867c.02 30.597 24.798 55.408 55.396 55.466V133.156c0-5.891-4.776-10.667-10.667-10.667");
}

.lebx4acdp {
  d: path("M183.822 61.262H60.872c.019 30.625 24.84 55.447 55.466 55.467h22.649v21.938c.039 30.625 24.877 55.43 55.502 55.43V71.93c0-5.891-4.776-10.667-10.667-10.667");
}

.nrhdozbkx {
  fill: var(--svg-color--2684ff, #2684ff);
  d: path("M244.658 0H121.707a55.5 55.5 0 0 0 55.502 55.502h22.649V77.37c.02 30.625 24.841 55.447 55.466 55.467V10.666C255.324 4.777 250.55 0 244.658 0");
}

.sav6x4bmf {
  stop-color: var(--svg-color--0052cc, #0052cc);
}
</style><defs><linearGradient id="SVGSBI7obaC" x1="98.031%" x2="58.888%" y1=".161%" y2="40.766%"><stop offset="18%" class="sav6x4bmf"/><stop offset="100%" class="g_gp7lgqe"/></linearGradient><linearGradient id="SVGHifZlbzE" x1="100.665%" x2="55.402%" y1=".455%" y2="44.727%"><stop offset="18%" class="sav6x4bmf"/><stop offset="100%" class="g_gp7lgqe"/></linearGradient></defs><path class="nrhdozbkx"/><path fill="url(#SVGSBI7obaC)" class="lebx4acdp"/><path fill="url(#SVGHifZlbzE)" class="ko9nuccxa"/>`,
		"fallback": "logos:jira",
	});
}

export default Component;
