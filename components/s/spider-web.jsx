import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3dgdimif.css';
import '../../css/r/rjla032nt.css';
import '../../css/r/rb6uxlbqz.css';
import '../../css/j/jct_xxifs.css';
import '../../css/s/s4txclbaz.css';
import '../../css/t/t8uxqgbaq.css';
import '../../css/l/l12qr-bdy.css';
import '../../css/p/pn7gq_i3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3dgdimif wm-shadow"/><path class="rjla032nt wm-k"/><path class="rb6uxlbqz wm-k"/><path class="jct_xxifs wm-k"/><path class="s4txclbaz wm-k"/><path class="t8uxqgbaq wm-k"/><path class="l12qr-bdy wm-shine"/><path class="pn7gq_i3q wm-k"/>`,
		"fallback": "withicons-pastel:spider-web",
	});
}

export default Component;
