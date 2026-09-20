import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/sdn1o94xw.css';
import '../../css/e/el5t0vbwe.css';
import '../../css/f/fftbuu8sb.css';
import '../../css/a/ak2-klber.css';
import '../../css/a/aj1_dqb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="sdn1o94xw"/><path class="el5t0vbwe"/><path clip-rule="evenodd" class="fftbuu8sb"/><path class="ak2-klber"/><path class="aj1_dqb7j"/></g>`,
		"fallback": "streamline-sharp-color:view-document-files",
	});
}

export default Component;
