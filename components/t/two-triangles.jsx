import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fpa8ojhka.css';
import '../../css/c/cqng7jbzi.css';
import '../../css/q/qi1-x1b4y.css';
import '../../css/u/u3lpmgb1x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxuPy0dzJ"><g class="ft5dv1b6b"><path class="fpa8ojhka"/><path class="cqng7jbzi"/><path class="qi1-x1b4y"/><path class="u3lpmgb1x"/></g></mask></defs><path mask="url(#SVGxuPy0dzJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:two-triangles",
	});
}

export default Component;
