import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":266};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ap58jmchm {
  fill: var(--svg-color--8dc63f, #8dc63f);
  d: path("M256 103.863v103.769h-84.193v57.395l-62.622-57.205l18.815-.76V103.863z");
}

.jz-x2pbah {
  fill: var(--svg-color--375c93, #375c93);
  d: path("M128 103.863v120.678l-18.815-16.719H0V103.863z");
}

.mucs4acic {
  fill: var(--svg-color--34a574, #34a574);
  d: path("M128 0h128v103.768H128z");
}

.wlnzmobhi {
  fill: var(--svg-color--fff, #fff);
  d: path("M181.024 134.177V48.273h30.599v111.086H165.25l-93.6-87.424v87.519H40.956V48.273h47.988z");
}

.xjdihdc4i {
  fill: var(--svg-color--27aae1, #27aae1);
  d: path("M0 0h128v103.768H0z");
}
</style><path class="mucs4acic"/><path class="xjdihdc4i"/><path class="ap58jmchm"/><path class="jz-x2pbah"/><path class="wlnzmobhi"/>`,
		"fallback": "logos:nats-icon",
	});
}

export default Component;
