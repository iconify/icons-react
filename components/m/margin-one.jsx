import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/r/r6vob4b7a.css';
import '../../css/o/o-smjjrei.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcGTQPebU"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="r6vob4b7a"/><path class="o-smjjrei"/></g></mask></defs><path mask="url(#SVGcGTQPebU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:margin-one",
	});
}

export default Component;
