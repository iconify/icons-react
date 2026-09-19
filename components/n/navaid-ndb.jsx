import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd_-azbqb.css';
import '../../css/e/e39ud6bwf.css';
import '../../css/g/g8j3q2hcu.css';
import '../../css/d/djovwac8v.css';
import '../../css/z/zr4i-es2q.css';
import '../../css/d/dertp7bua.css';
import '../../css/b/bzy-m6tlz.css';
import '../../css/t/ta0v0eb1c.css';
import '../../css/d/de4dudtpq.css';
import '../../css/c/cfvjmurfn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd_-azbqb"/><circle class="e39ud6bwf"/><circle class="g8j3q2hcu"/><circle class="djovwac8v"/><circle class="zr4i-es2q"/><circle class="dertp7bua"/><circle class="bzy-m6tlz"/><circle class="ta0v0eb1c"/><circle class="de4dudtpq"/><circle class="cfvjmurfn"/>`,
		"fallback": "carbon:navaid-ndb",
	});
}

export default Component;
