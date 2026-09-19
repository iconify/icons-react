import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0dso5b6p.css';
import '../../css/d/dbkvu0bho.css';
import '../../css/b/btjdeyb9a.css';
import '../../css/q/qu9agstgr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0dso5b6p"/><path class="dbkvu0bho"/><path class="btjdeyb9a"/><path class="qu9agstgr"/>`,
		"fallback": "devicon:linkedin-wordmark",
	});
}

export default Component;
