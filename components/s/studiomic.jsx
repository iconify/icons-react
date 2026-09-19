import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0cjn19st.css';
import '../../css/v/vttnoxb3a.css';
import '../../css/t/thyk-8lft.css';
import '../../css/l/l-vv0zlfy.css';
import '../../css/g/gq7wmbbhc.css';
import '../../css/f/fk37twbqz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0cjn19st"/><path class="vttnoxb3a"/><path class="thyk-8lft"/><path class="l-vv0zlfy"/><ellipse class="gq7wmbbhc"/><path class="fk37twbqz"/>`,
		"fallback": "fxemoji:studiomic",
	});
}

export default Component;
