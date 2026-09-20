import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n0b-nabll {
  cx: 4.5px;
  cy: 31.5px;
  r: 1.5px;
  fill: var(--svg-color--66757f, #66757f);
}

.p058-9bdm {
  fill: var(--svg-color--55acee, #55acee);
  d: path("M18 11c8 0 10 1 11 2s2 3 2 8s-1 7-2 8s-3 2-11 2s-10-1-11-2s-2-3-2-8s1-7 2-8s3-2 11-2");
}

.q5_wz6ine {
  fill: var(--svg-color--31373d, #31373d);
  d: path("M35 31s0 4-4 4H5c-4 0-4-4-4-4V12c0-4 4-4 4-4h26s4 0 4 4z");
}

.q89lwf3uv {
  fill: var(--svg-color--31373d, #31373d);
  d: path("M14.697 10.389a.999.999 0 1 0 1.414 1.414l9.192-9.192a.999.999 0 1 0-1.414-1.414z");
}

.rn8rerqzf {
  fill: var(--svg-color--31373d, #31373d);
  d: path("M21.303 10.389a.999.999 0 1 1-1.414 1.414l-9.192-9.192a.999.999 0 1 1 1.414-1.414z");
}

.tf-u9zncu {
  cx: 31.5px;
  cy: 31.5px;
  r: 1.5px;
  fill: var(--svg-color--66757f, #66757f);
}
</style><path class="q5_wz6ine"/><path class="rn8rerqzf"/><path class="q89lwf3uv"/><path class="p058-9bdm"/><circle class="tf-u9zncu"/><circle class="n0b-nabll"/>`,
		"fallback": "twemoji:television",
	});
}

export default Component;
