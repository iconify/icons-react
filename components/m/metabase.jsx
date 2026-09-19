import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggxid93ky.css';
import '../../css/b/bh440_b6i.css';
import '../../css/r/rylzuwbgf.css';
import '../../css/o/oupo_0fzh.css';
import '../../css/w/wmfk3fbwo.css';
import '../../css/k/kallbkgcj.css';
import '../../css/l/l3zy7_bfn.css';
import '../../css/r/r2but1ppt.css';
import '../../css/n/ne7_52qku.css';
import '../../css/b/b4loj8y2l.css';
import '../../css/i/ioc9qhbdw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggxid93ky"/><path class="bh440_b6i"/><path class="rylzuwbgf"/><path class="oupo_0fzh"/><path class="wmfk3fbwo"/><path class="kallbkgcj"/><path class="l3zy7_bfn"/><path class="r2but1ppt"/><path class="ne7_52qku"/><path class="b4loj8y2l"/><path class="ioc9qhbdw"/>`,
		"fallback": "devicon:metabase",
	});
}

export default Component;
