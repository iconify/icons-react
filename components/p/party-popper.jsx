import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-u5_sbcc.css';
import '../../css/e/e4ps_lblq.css';
import '../../css/s/s_j5eo02t.css';
import '../../css/c/cz400tjvm.css';
import '../../css/r/r_p9c2omy.css';
import '../../css/s/s8hu8pmkn.css';
import '../../css/s/s-kyd2btf.css';
import '../../css/p/pt6k5obfp.css';
import '../../css/g/g8ss23ggt.css';
import '../../css/q/qoansfsaf.css';
import '../../css/u/uqgie5bay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow z-u5_sbcc"/><path class="e4ps_lblq wm-k"/><path class="s_j5eo02t wm-k"/><path class="cz400tjvm wm-k"/><path class="r_p9c2omy wm-k"/><path class="s8hu8pmkn wm-k"/><path class="s-kyd2btf wm-shine"/><path class="pt6k5obfp wm-k"/><path class="g8ss23ggt wm-k"/><path class="qoansfsaf wm-a"/><path class="uqgie5bay wm-a"/>`,
		"fallback": "withicons-pastel:party-popper",
	});
}

export default Component;
