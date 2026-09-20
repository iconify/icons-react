import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkn9vbcgi.css';
import '../../css/d/dw_zwc6tq.css';
import '../../css/k/kgb598b8c.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/i/iile3cbjj.css';
import '../../css/j/jb_krbbxs.css';
import '../../css/d/de5t2lbzo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkn9vbcgi"/><path class="dw_zwc6tq"/><path class="kgb598b8c"/><g class="brzn_0bpr"><path class="iile3cbjj"/><path class="jb_krbbxs"/><path class="de5t2lbzo"/></g>`,
		"fallback": "openmoji:mechanical-arm",
	});
}

export default Component;
