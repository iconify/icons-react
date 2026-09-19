import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/m/m2blynbna.css';
import '../../css/j/jb4axvbld.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYX7KscDr"><g class="ufeehvblu"><path class="m2blynbna"/><path class="jb4axvbld"/></g></mask></defs><path mask="url(#SVGYX7KscDr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:upload-three",
	});
}

export default Component;
