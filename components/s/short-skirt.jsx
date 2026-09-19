import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bhxj3vn6f.css';
import '../../css/b/bddlodbbs.css';
import '../../css/e/ekpxz8bow.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5BC7AebV"><g class="wwvp95byt"><path class="bhxj3vn6f"/><path class="bddlodbbs"/><path class="ekpxz8bow"/></g></mask></defs><path mask="url(#SVG5BC7AebV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:short-skirt",
	});
}

export default Component;
