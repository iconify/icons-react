import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k01jo-u7o.css';
import '../../css/i/i44lddbdv.css';
import '../../css/y/yum_gybhk.css';
import '../../css/r/rkvrpmb5i.css';
import '../../css/t/t799pkbnr.css';
import '../../css/o/ogsu0gbgp.css';
import '../../css/i/i1cab4bgu.css';
import '../../css/j/jnppy4bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k01jo-u7o wm-shadow"/><path class="i44lddbdv wm-k"/><path class="wm-k yum_gybhk"/><path class="rkvrpmb5i wm-k"/><path class="t799pkbnr wm-k"/><path class="ogsu0gbgp wm-k"/><path class="i1cab4bgu wm-shine"/><path class="jnppy4bio wm-deco"/>`,
		"fallback": "withicons-pastel:moon",
	});
}

export default Component;
