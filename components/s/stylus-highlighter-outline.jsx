import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gxi80t1ts {
  fill: currentColor;
  d: path("M7.673 15.308V5.616q0-.672.472-1.144T9.29 4q.186 0 .363.04t.339.121l5.403 2.649q.423.211.669.603t.245.85v7.045zm1-1h6.635V8.264q0-.173-.097-.327q-.096-.154-.25-.231l-5.403-2.61q-.308-.154-.597.029t-.288.529zM5 20l.473-1.317q.162-.452.533-.722t.848-.269h10.292q.477 0 .848.27t.533.72L19 20zm3.673-5.692h6.635z");
}
</style><path class="gxi80t1ts"/>`,
		"fallback": "material-symbols-light:stylus-highlighter-outline",
	});
}

export default Component;
