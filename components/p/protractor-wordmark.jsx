import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edrdnacqq.css';
import '../../css/z/zsxtqrb5l.css';
import '../../css/i/iprg3yp0h.css';
import '../../css/e/ekunhbcfg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edrdnacqq"/><path class="zsxtqrb5l"/><path class="iprg3yp0h"/><path class="ekunhbcfg"/>`,
		"fallback": "devicon:protractor-wordmark",
	});
}

export default Component;
