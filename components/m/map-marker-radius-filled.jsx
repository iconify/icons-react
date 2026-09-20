import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5o_-j.css';
import '../../css/q/qbc6zl.css';
import '../../css/l/lsejuv.css';
import '../../css/y/ydovum.css';
import '../../css/s/s9k93y.css';
import '../../css/s/so-from-42.css';
import '../../css/f/fill-to-1.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';
import '../../css/d/d-zdr4ap.css';
import '../../css/d/d-1z8qst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGd54LVcuB"><path class="b5o_-j"/><circle class="qbc6zl"/></mask></defs><path mask="url(#SVGd54LVcuB)" class="lsejuv ydovum"/><path class="s9k93y ydovum"/>`,
		"fallback": "line-md:map-marker-radius-filled",
	});
}

export default Component;
