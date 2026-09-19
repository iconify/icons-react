import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j8qe97mao.css';
import '../../css/d/dqb34cb-q.css';
import '../../css/l/lkor3sjsk.css';
import '../../css/c/cs1jozb4q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGe0JKDekM"><g class="ft5dv1b6b"><rect class="j8qe97mao"/><path class="dqb34cb-q"/><path class="lkor3sjsk"/><circle class="cs1jozb4q"/></g></mask></defs><path mask="url(#SVGe0JKDekM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:wallet-one",
	});
}

export default Component;
