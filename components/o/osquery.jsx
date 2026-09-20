import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":255};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a2ez2ybll {
  fill: var(--svg-color--a596ff, #a596ff);
  d: path("M.801 254.936V191.2l63.605-63.605v63.869z");
}

.dyf295bks {
  fill: var(--svg-color--a596ff, #a596ff);
  d: path("M255.346 254.804H191.61l-63.605-63.605h63.867z");
}

.f4_2imb2p {
  d: path("M128.006.258v63.736l63.605 63.605v-63.87z");
}

.lnf_v1bdb {
  d: path("M255.346 127.595H191.61L128.005 191.2h63.867z");
}

.n3av71ups {
  d: path("M128.01 254.936V191.2l-63.605-63.605v63.869z");
}

.sd9u29uny {
  fill: var(--svg-color--a596ff, #a596ff);
  d: path("M255.215.258v63.736l-63.605 63.605v-63.87z");
}

.srzltpblf {
  d: path("M.672 127.594h63.736l63.605-63.605H64.145z");
}

.ssbzevbmn {
  fill: var(--svg-color--a596ff, #a596ff);
  d: path("M.672.386h63.736l63.605 63.605H64.145z");
}
</style><path class="sd9u29uny"/><path class="f4_2imb2p"/><path class="dyf295bks"/><path class="lnf_v1bdb"/><path class="a2ez2ybll"/><path class="n3av71ups"/><path class="ssbzevbmn"/><path class="srzltpblf"/>`,
		"fallback": "logos:osquery",
	});
}

export default Component;
